type ValidationFn = (value: any) => string | null;
type TSchema = Record<string, ValidationFn[]>;

const EMAIL_REGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

class Schema {
  schema: TSchema;

  constructor(schema: TSchema) {
    this.schema = schema;
  }

  parse(data: Record<string, any>) {
    const errors: Record<string, string> = {};

    for (const key in this.schema) {
      const value = data[key];
      const validators = this.schema[key];

      for (const validator of validators) {
        const error = validator(value);
        if (error) {
          return error;
        }
      }
    }
    return Object.keys(errors).length ? errors : null;
  }
}

class Z {
  private validators: ValidationFn[] = [];

  ERROR_MSG = 'Fail Validation';

  static object(schema: Record<string, Z>): Schema {
    const validationSchema: TSchema = {};
    for (const key in schema) {
      validationSchema[key] = schema[key].validators;
    }
    return new Schema(validationSchema);
  }

  string() {
    this.validators.push((value: any) => (typeof value === 'string' ? null : this.ERROR_MSG));
    return this;
  }

  email({ message = this.ERROR_MSG }: { message?: string }) {
    this.validators.push((value: any) => (EMAIL_REGEX.test(value) ? null : message));
    return this;
  }

  min({ num, message = this.ERROR_MSG }: { num: number; message?: string }) {
    this.validators.push((value: any) => (value.length >= num ? null : message));
    return this;
  }
}

export default Z;
