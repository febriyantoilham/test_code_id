import { Injectable } from '@nestjs/common';

@Injectable()
export class SelftnumberService {
  private generator(angka: number) {
    let result = angka;
    for (let i = 0; i < angka.toString().length; i++) {
      result += parseInt(angka.toString()[i]);
    }

    return result;
  }

  public searchSelfNumbers(n: number) {
    const notSelfNumber: number[] = [];
    let total = 0;
    for (let i = 1; i <= n; i++) {
      const result = this.generator(i);
      if (result <= n) {
        notSelfNumber.push(result);
      }
    }

    for (let i = 1; i <= n; i++) {
      if (!notSelfNumber.some((a) => a == i)) {
        total += i;
      }
    }

    return total;
  }
}
