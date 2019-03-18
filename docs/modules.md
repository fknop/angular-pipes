# Modules

Each category of pipes has an exported module. And one module imports all these modules.

* `NgAggregatePipesModule`
* `NgArrayPipesModule`
* `NgBooleanPipesModule`
* `NgMathPipesModule`
* `NgObjectPipesModule`
* `NgStringPipesModule`
* `NgPipesModule` (imports all the module above)


## Example

```typescript
import { NgModule } from '@angular/core';

import { NgArrayPipesModule, NgStringPipesModule } from 'gix-angular-pipes';

@NgModule({
    imports: [
        NgArrayPipesModule,
        NgStringPipesModule
    ]
})
export class MyApplicationModule {}

```
