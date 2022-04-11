import BaseEntity from "../shared/base.entity";

export class AuthEntity extends BaseEntity {
  fist_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  age?: Date;
  fist_login = true;
  /**
   * Identificador do tipo "CPF"
   */
  identifier_1?: string;
  /**
   * Identificador do tipo "RG"
   */
  identifier_2?: string;
}

export default new AuthEntity();
