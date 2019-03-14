
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

export enum BiologicallyDerivedProduct_StorageScaleKind {
                farenheit = 'farenheit',
celsius = 'celsius',
kelvin = 'kelvin'
            }
const BiologicallyDerivedProduct_StorageScaleKindKeys = t.keyof({
                [BiologicallyDerivedProduct_StorageScaleKind.farenheit]: null,
[BiologicallyDerivedProduct_StorageScaleKind.celsius]: null,
[BiologicallyDerivedProduct_StorageScaleKind.kelvin]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
description: t.string,
_description: RTTI_Element,
temperature: t.number,
_temperature: RTTI_Element,
scale: BiologicallyDerivedProduct_StorageScaleKindKeys,
_scale: RTTI_Element,
duration: RTTI_Period
        });
        

        export var RTTI_BiologicallyDerivedProduct_Storage:any = t.intersection([mandatory, partial]);
        

export type IBiologicallyDerivedProduct_Storage = t.TypeOf<typeof RTTI_BiologicallyDerivedProduct_Storage>;
        
        