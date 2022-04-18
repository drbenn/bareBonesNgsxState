export class IncrementValue {
  static readonly type = '+1';
}

export class DecrementValue {
  static readonly type = '-1';
}

export class ResetValue {
  static readonly type = 'Reset value to 0';
}

export class SetValue {
  static readonly type = 'Set Value by user';
  constructor(public payload: number) {}
}
