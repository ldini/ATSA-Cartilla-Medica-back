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
exports.PrestadorController = void 0;
const common_1 = require("@nestjs/common");
const prestador_service_1 = require("./prestador.service");
const create_prestador_dto_1 = require("./dto/create-prestador.dto");
const update_prestador_dto_1 = require("./dto/update-prestador.dto");
let PrestadorController = class PrestadorController {
    constructor(prestadorService) {
        this.prestadorService = prestadorService;
    }
    async getDetailPrestadores() {
        const detailPrestadores = await this.prestadorService.findDetailPrestadores();
        return detailPrestadores;
    }
    create(createPrestadorDto) {
        return this.prestadorService.create(createPrestadorDto);
    }
    findAll() {
        return this.prestadorService.findAll();
    }
    findOne(id) {
        return this.prestadorService.findOne(+id);
    }
    update(id, updatePrestadorDto) {
        return this.prestadorService.update(+id, updatePrestadorDto);
    }
    remove(id) {
        return this.prestadorService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('detail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrestadorController.prototype, "getDetailPrestadores", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestador_dto_1.CreatePrestadorDto]),
    __metadata("design:returntype", void 0)
], PrestadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrestadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrestadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prestador_dto_1.UpdatePrestadorDto]),
    __metadata("design:returntype", void 0)
], PrestadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrestadorController.prototype, "remove", null);
PrestadorController = __decorate([
    (0, common_1.Controller)('prestador'),
    __metadata("design:paramtypes", [prestador_service_1.PrestadorService])
], PrestadorController);
exports.PrestadorController = PrestadorController;
//# sourceMappingURL=prestador.controller.js.map