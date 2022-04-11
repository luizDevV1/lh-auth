export class Rules {
  public required = (args: string, no_required = false): true | string => {
    if (no_required) return true;

    return (!!args && args.length > 0) || "Campo Obrigatório!";
  };
}

export default new Rules();
