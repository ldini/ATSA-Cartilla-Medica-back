"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                "type": "mssql",
                "host": "localhost",
                "port": 1433,
                "username": "sa",
                "password": "Motorola5465",
                "database": "cartilla",
                "synchronize": true,
                "entities": ["dist/**/*.entity{.ts,.js}"],
                options: { encrypt: false },
            });
            return dataSource.initialize();
        },
    }
];
//# sourceMappingURL=database.providers.js.map