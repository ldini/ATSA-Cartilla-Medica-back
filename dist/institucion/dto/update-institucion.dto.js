"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstitucionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_institucion_dto_1 = require("./create-institucion.dto");
class UpdateInstitucionDto extends (0, mapped_types_1.PartialType)(create_institucion_dto_1.CreateInstitucionDto) {
}
exports.UpdateInstitucionDto = UpdateInstitucionDto;
//# sourceMappingURL=update-institucion.dto.js.map