abstract class BaseEntity {
  active = true;
  create_date = new Date();
  modify_date?: Date;
}

export default BaseEntity;
