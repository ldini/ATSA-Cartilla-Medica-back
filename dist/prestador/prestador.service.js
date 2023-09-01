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
exports.PrestadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prestador_entity_1 = require("./entities/prestador.entity");
const VistaDetallePrestadores_entity_1 = require("./entities/VistaDetallePrestadores.entity");
let PrestadorService = class PrestadorService {
    constructor(prestadorRepository, vistaDetallePrestadoresRepository) {
        this.prestadorRepository = prestadorRepository;
        this.vistaDetallePrestadoresRepository = vistaDetallePrestadoresRepository;
    }
    async findDetailPrestadores() {
        const result = await this.vistaDetallePrestadoresRepository.find();
        console.log(result);
        return result;
    }
    create(createPrestadorDto) {
        return 'This action adds a new prestador';
    }
    findAll() {
        return `This action returns all prestador`;
    }
    findOne(id) {
        return `This action returns a #${id} prestador`;
    }
    update(id, updatePrestadorDto) {
        return `This action updates a #${id} prestador`;
    }
    remove(id) {
        return `This action removes a #${id} prestador`;
    }
};
PrestadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prestador_entity_1.Prestador)),
    __param(1, (0, typeorm_1.InjectRepository)(VistaDetallePrestadores_entity_1.VistaDetallePrestadores)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PrestadorService);
exports.PrestadorService = PrestadorService;
//# sourceMappingURL=prestador.service.js.map