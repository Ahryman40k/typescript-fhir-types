
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum ImplementationGuide_PageGenerationKind {
                html = 'html',
markdown = 'markdown',
xml = 'xml',
generated = 'generated'
            }
const ImplementationGuide_PageGenerationKindKeys = t.keyof({
                [ImplementationGuide_PageGenerationKind.html]: null,
[ImplementationGuide_PageGenerationKind.markdown]: null,
[ImplementationGuide_PageGenerationKind.xml]: null,
[ImplementationGuide_PageGenerationKind.generated]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
nameUrl: t.string,
_nameUrl: RTTI_Element,
nameReference: RTTI_Reference,
title: t.string,
_title: RTTI_Element,
generation: ImplementationGuide_PageGenerationKindKeys,
_generation: RTTI_Element,
page: t.array(RTTI_ImplementationGuide_Page)
        });
        

        export var RTTI_ImplementationGuide_Page:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Page = t.TypeOf<typeof RTTI_ImplementationGuide_Page>;
        
        