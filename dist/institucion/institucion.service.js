"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitucionService = void 0;
const common_1 = require("@nestjs/common");
let InstitucionService = class InstitucionService {
    create(createInstitucionDto) {
        return 'This action adds a new institucion';
    }
    findAll() {
        return `This action returns all institucion`;
    }
    findOne(id) {
        return `This action returns a #${id} institucion`;
    }
    update(id, updateInstitucionDto) {
        return `This action updates a #${id} institucion`;
    }
    remove(id) {
        return `This action removes a #${id} institucion`;
    }
};
InstitucionService = __decorate([
    (0, common_1.Injectable)()
], InstitucionService);
exports.InstitucionService = InstitucionService;
//# sourceMappingURL=institucion.service.js.map