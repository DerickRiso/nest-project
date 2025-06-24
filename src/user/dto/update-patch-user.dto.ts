// Validação da mudança de usuário (unico campo)
import { CreateUserDTO } from "./create-user.dto";
import { PartialType } from '@nestjs/mapped-types'

export class UpdatePatchUserDTO extends PartialType(CreateUserDTO) {
    
}