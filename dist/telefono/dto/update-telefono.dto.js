"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTelefonoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_telefono_dto_1 = require("./create-telefono.dto");
class UpdateTelefonoDto extends (0, mapped_types_1.PartialType)(create_telefono_dto_1.CreateTelefonoDto) {
}
exports.UpdateTelefonoDto = UpdateTelefonoDto;
//# sourceMappingURL=update-telefono.dto.js.map