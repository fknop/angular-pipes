# Modules

Angular RC.5 comes with `NgModule`.

Since version `2.2.0` you can take advantage of these modules.

Each category of pipes has an exported module. And one module imports all these modules.

* NgAggregatePipesModule
* NgArrayPipesModule
* NgBooleanPipesModule
* NgMathPipesModule
* NgObjectPipesModule
* NgStringPipesModule
* NgPipesModule (imports all the module above)


## Example

```typescript
import { NgModule } from '@angular/core';

import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';

@NgModule({
    imports: [
        NgArrayPipesModule,
        NgStringPipesModule
    ]
})
export class MyApplicationModule {}

```
