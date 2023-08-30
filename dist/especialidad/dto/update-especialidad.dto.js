"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEspecialidadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_especialidad_dto_1 = require("./create-especialidad.dto");
class UpdateEspecialidadDto extends (0, mapped_types_1.PartialType)(create_especialidad_dto_1.CreateEspecialidadDto) {
}
exports.UpdateEspecialidadDto = UpdateEspecialidadDto;
//# sourceMappingURL=update-especialidad.dto.js.map