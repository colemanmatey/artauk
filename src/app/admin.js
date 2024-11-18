import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import sequelize from './db.js';
import config from '../config/index.js';
import artService from '../services/artService.js';

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

// Define and register the custom action with AdminJS
const artworkResource = {
  resource: sequelize.models.Art,  // Ensure this is the correct model name
  options: {
    actions: {
      // Individual action (Approve on a single record)
      approve: {
        label: 'Approve Artwork',
        icon: 'CheckCircle',
        handler: async (request, response, context) => {
          const { id } = context.params;  // Get the artwork ID from the URL
          try {
            const artwork = await sequelize.models.Art.findByPk(id);
      
            if (!artwork) {
              return {
                record: null,
                notification: {
                  message: 'Artwork not found.',
                  type: 'error',
                },
              };
            }
      
            // Approve the artwork by setting the IsApproved flag
            const result = await artService.approveArtwork(id);
      
            if (result) {
              return {
                record: result.toJSON(),  // Return the updated artwork data
                notification: {
                  message: 'Artwork approved successfully!',
                  type: 'success',
                },
                // After successful approval, redirect to the artwork's page
                redirect: `/admin/resources/Art/${id}`,
              };
            }
      
            return {
              record: null,
              notification: {
                message: 'Failed to approve artwork.',
                type: 'error',
              },
            };
          } catch (error) {
            console.error('Error approving artwork:', error);
            return {
              record: null,
              notification: {
                message: 'An error occurred while approving the artwork.',
                type: 'error',
              },
            };
          }
        },
      },
      
      
    
      // Bulk action (Approve on multiple records)
      approveMany: {
        label: 'Approve Selected Artworks',
        icon: 'CheckCircle',
        actionType: 'bulk',  // Indicating it's a bulk action
        handler: async (request, response, context) => {
          const { records } = context; // Get the selected records
      
          if (records.length === 0) {
            return {
              records: null,
              notification: {
                message: 'No records selected.',
                type: 'error',
              },
            };
          }
      
          const ids = records.map(record => record.id); // Extract IDs of selected artworks
      
          try {
            const result = await artService.approveMultipleArtworks(ids); // Call service to approve the selected artworks
      
            if (result) {
              return {
                records: result.map(record => record.toJSON()), // Return updated records in JSON format
                notification: {
                  message: `${ids.length} artworks approved successfully!`,
                  type: 'success',
                },
              };
            }
      
            return {
              records: null,
              notification: {
                message: 'No records were updated.',
                type: 'error',
              },
            };
          } catch (error) {
            console.error('Error approving artworks:', error);
            return {
              records: null,
              notification: {
                message: 'An error occurred while approving artworks.',
                type: 'error',
              },
            };
          }
        },
      },
      
    },
  },
};

// Initialize AdminJS with the resource
const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  resources: [artworkResource],  // Register the custom resource directly here
});

// Authenticate the AdminJS router
const authenticate = async (admin, password) => {
  if (admin === config.admin.username && password === config.admin.password) {
    return { admin, password };
  }
  return null;
};

// Build the AdminJS router with authentication
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate,
  cookieName: config.cookie.name,
  cookiePassword: config.cookie.secret,
});

export { adminJs, adminRouter };
