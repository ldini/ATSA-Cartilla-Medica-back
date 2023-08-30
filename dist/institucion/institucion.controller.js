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
const update_institucion_dto_1 = require("./dto/update-institucion.dto");
let InstitucionController = class InstitucionController {
    constructor(institucionService) {
        this.institucionService = institucionService;
    }
    create(createInstitucionDto) {
        return this.institucionService.create(createInstitucionDto);
    }
    findAll() {
        return this.institucionService.findAll();
    }
    findOne(id) {
        return this.institucionService.findOne(+id);
    }
    update(id, updateInstitucionDto) {
        return this.institucionService.update(+id, updateInstitucionDto);
    }
    remove(id) {
        return this.institucionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_institucion_dto_1.CreateInstitucionDto]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_institucion_dto_1.UpdateInstitucionDto]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstitucionController.prototype, "remove", null);
InstitucionController = __decorate([
    (0, common_1.Controller)('institucion'),
    __metadata("design:paramtypes", [institucion_service_1.InstitucionService])
], InstitucionController);
exports.InstitucionController = InstitucionController;
//# sourceMappingURL=institucion.controller.js.map