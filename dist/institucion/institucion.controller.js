"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitucionController = void 0;
const common_1 = require("@nestjs/common");
const institucion_service_1 = require("./institucion.service");
const create_institucion_dto_1 = require("./dto/create-institucion.dto");
let InstitucionController = class InstitucionController {
    constructor(institucionService) {
        this.institucionService = institucionService;
    }
    listar() {
        return this.institucionService.listar();
    }
    allInstituciones() {
        return this.institucionService.allInstituciones();
    }
    create(createInstitucionDto) {
        return this.institucionService.create(createInstitucionDto);
    }
    listar_guardia() {
        return this.institucionService.listar_guardia();
    }
    listar_externos() {
        return this.institucionService.listar_externos();
    }
    async findNoInstitucionesByPrestadorId(prestadorId) {
        return this.institucionService.findNoInstitucionesByPrestadorId(prestadorId);
    }
    async findInstitucionesByPrestadorId(prestadorId) {
        return this.institucionService.findInstitucionesByPrestadorId(prestadorId);
    }
    create_guardia(body) {
        return this.institucionService.create_guardia(body);
    }
    create_externo(body) {
        return this.institucionService.create_externo(body);
    }
    deleteGuardia(body) {
        return this.institucionService.deleteGuardia(body);
    }
    deleteExterno(body) {
        return this.institucionService.deleteExterno(body);
    }
    delete(id) {
        return this.institucionService.delete(id);
    }
    update(id, body) {
        return this.institucionService.update(id, body);
    }
};
__decorate([
    (0, common_1.Get)('listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], InstitucionController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('all_instituciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], InstitucionController.prototype, "allInstituciones", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_institucion_dto_1.CreateInstitucionDto]),
    __metadata("design:returntype", Promise)
], InstitucionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('listar_guardia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], InstitucionController.prototype, "listar_guardia", null);
__decorate([
    (0, common_1.Get)('listar_externos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], InstitucionController.prototype, "listar_externos", null);
__decorate([
    (0, common_1.Get)('listar/no/:prestadorId'),
    __param(0, (0, common_1.Param)('prestadorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitucionController.prototype, "findNoInstitucionesByPrestadorId", null);
__decorate([
    (0, common_1.Get)('listar/:prestadorId'),
    __param(0, (0, common_1.Param)('prestadorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitucionController.prototype, "findInstitucionesByPrestadorId", null);
__decorate([
    (0, common_1.Post)('create_guardia'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstitucionController.prototype, "create_guardia", null);
__decorate([
    (0, common_1.Post)('create_externo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstitucionController.prototype, "create_externo", null);
__decorate([
    (0, common_1.Post)('delete_guardia'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "deleteGuardia", null);
__decorate([
    (0, common_1.Post)('delete_externo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "deleteExterno", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "update", null);
InstitucionController = __decorate([
    (0, common_1.Controller)('institucion'),
    __metadata("design:paramtypes", [institucion_service_1.InstitucionService])
], InstitucionController);
exports.InstitucionController = InstitucionController;
//# sourceMappingURL=institucion.controller.js.map