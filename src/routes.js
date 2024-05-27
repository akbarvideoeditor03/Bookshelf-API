const {
    addBukuHandler,
    getAllBukuHandler,
    getBukuByIdHandler,
    editBukuByIdHandler,
    deleteBukuByIdHandler,
} = require('./handler');

const routes = [{
        method: 'POST',
        path: '/books',
        handler: addBukuHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBukuHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBukuByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBukuByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBukuByIdHandler,
    },
];

module.exports = routes;