"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrestadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prestador_dto_1 = require("./create-prestador.dto");
class UpdatePrestadorDto extends (0, mapped_types_1.PartialType)(create_prestador_dto_1.CreatePrestadorDto) {
}
exports.UpdatePrestadorDto = UpdatePrestadorDto;
//# sourceMappingURL=update-prestador.dto.js.map