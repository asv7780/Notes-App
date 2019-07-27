import { ActivatedRoute } from '@angular/router';

declare global {
  interface Object {
    mapToModel<T>(form: any): T;
    getModelFromRoute<T>(route: ActivatedRoute, name: string): Promise<T>;
  }
}

class ModelMappingHelper {
  public static mapToModel<T>(form: any): T {
    var obj = {} as T;
    Object.getOwnPropertyNames(obj).forEach(prop => {
      if (form[prop]) {
        obj[prop] = form[prop];
      }
    });
    return obj;
  }

  public static async getModelFromRoute<T>(route: ActivatedRoute, name: string): Promise<T> {
    let model: T;
    let params = await route.paramMap.toPromise();
    let param = params.get(name);

    if (param) {
      model = JSON.parse(param) as T;
    }

    return model;
  }
}

Object.mapToModel = ModelMappingHelper.mapToModel;
Object.getModelFromRoute = ModelMappingHelper.getModelFromRoute;

export {};
