import { NgModule } from '@angular/core';

import { 
    IsGreaterPipe,
    IsGreaterOrEqualPipe,
    IsLessPipe,
    IsLessOrEqualPipe,
    IsEqualPipe,
    IsNotEqualPipe,
    IsIdenticalPipe,
    IsNotIdenticalPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsStringPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsDefinedPipe
} from './src/boolean';

import {
    BytesPipe,
    CeilPipe,
    FloorPipe,
    RoundPipe,
    DegreesPipe,
    RadiansPipe,
    RandomPipe,
    SqrtPipe,
    PowPipe
} from './src/math';

import { 
    MaxPipe,
    MeanPipe,
    MinPipe,
    SumPipe
} from './src/aggregate';

import {
    EmptyPipe,
    HeadPipe,
    InitialPipe,
    LastPipe,
    JoinPipe,
    TailPipe,
    UniqPipe,
    WithoutPipe,
    MapPipe,
    WherePipe,
    RangePipe,
    PluckPipe,
    ReversePipe,
    OrderByPipe,
    CountPipe,
    SomePipe,
    EveryPipe,
    ShufflePipe,
    TakePipe,
    DropPipe,
    DeepPipe,
    ChunkPipe
} from './src/array';

import {
    KeysPipe,
    ToArrayPipe
} from './src/object';


import { 
    LeftPadPipe,
    MatchPipe,
    PadPipe,
    ReplacePipe,
    RightPadPipe,
    SplitPipe,
    TestPipe,
    TrimPipe,
    NewlinesPipe,
    CapitalizePipe,
    UpperFirstPipe,
    TemplatePipe,
    EncodeURIPipe,
    EncodeURIComponentPipe,
    TruncatePipe,
    RepeatPipe
} from './src/string';


@NgModule({
    exports: [
        EmptyPipe,
        HeadPipe,
        InitialPipe,
        LastPipe,
        JoinPipe,
        TailPipe,
        UniqPipe,
        WithoutPipe,
        MapPipe,
        WherePipe,
        RangePipe,
        PluckPipe,
        ReversePipe,
        OrderByPipe,
        CountPipe,
        SomePipe,
        EveryPipe,
        ShufflePipe,
        TakePipe,
        DropPipe,
        DeepPipe,
        ChunkPipe
    ]
})
export class Ng2ArrayPipesModule {}

@NgModule({
    exports: [
        BytesPipe,
        CeilPipe,
        FloorPipe,
        MaxPipe,
        MeanPipe,
        MinPipe,
        RoundPipe,
        SumPipe,
        DegreesPipe,
        RadiansPipe,
        RandomPipe,
        SqrtPipe,
        PowPipe
    ]
})
export class Ng2MathPipesModule {}

@NgModule({
    exports: [
        IsGreaterPipe,
        IsGreaterOrEqualPipe,
        IsLessPipe,
        IsLessOrEqualPipe,
        IsEqualPipe,
        IsNotEqualPipe,
        IsIdenticalPipe,
        IsNotIdenticalPipe,
        IsNullPipe,
        IsUndefinedPipe,
        IsFunctionPipe,
        IsNumberPipe,
        IsStringPipe,
        IsArrayPipe,
        IsObjectPipe,
        IsDefinedPipe
    ]
})
export class Ng2BooleanPipesModule {}

@NgModule({
    exports: [
        LeftPadPipe,
        MatchPipe,
        PadPipe,
        ReplacePipe,
        RightPadPipe,
        SplitPipe,
        TestPipe,
        TrimPipe,
        NewlinesPipe,
        CapitalizePipe,
        UpperFirstPipe,
        TemplatePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        TruncatePipe,
        RepeatPipe
    ]
})
export class Ng2StringPipesModule {}

@NgModule({
    exports: [
        KeysPipe,
        ToArrayPipe
    ]
})
export class Ng2ObjectPipesModule {}

@NgModule({
    exports: [
        MaxPipe,
        MeanPipe,
        MinPipe,
        SumPipe
    ]
})
export class Ng2AggregatePipesModule {}

@NgModule({
    exports: [
        Ng2ArrayPipesModule,
        Ng2MathPipesModule,
        Ng2BooleanPipesModule,
        Ng2StringPipesModule,
        Ng2ObjectPipesModule,
        Ng2AggregatePipesModule
    ]
})
export class Ng2PipesModule {}

// Export individual pipes 
export * from './src/aggregate';
export * from './src/array';
export * from './src/boolean';
export * from './src/math';
export * from './src/object';
export * from './src/string';
