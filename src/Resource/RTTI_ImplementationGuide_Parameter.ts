
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ImplementationGuide_ParameterCodeKind {
                applyBusinessVersion = 'applyBusinessVersion',
applyJurisdiction = 'applyJurisdiction',
pathResource = 'pathResource',
pathPages = 'pathPages',
pathTxCache = 'pathTxCache',
expansionParameter = 'expansionParameter',
ruleBrokenLinks = 'ruleBrokenLinks',
generateXml = 'generateXml',
generateJson = 'generateJson',
generateTurtle = 'generateTurtle',
htmlTemplate = 'htmlTemplate'
            }
const ImplementationGuide_ParameterCodeKindKeys = t.keyof({
                [ImplementationGuide_ParameterCodeKind.applyBusinessVersion]: null,
[ImplementationGuide_ParameterCodeKind.applyJurisdiction]: null,
[ImplementationGuide_ParameterCodeKind.pathResource]: null,
[ImplementationGuide_ParameterCodeKind.pathPages]: null,
[ImplementationGuide_ParameterCodeKind.pathTxCache]: null,
[ImplementationGuide_ParameterCodeKind.expansionParameter]: null,
[ImplementationGuide_ParameterCodeKind.ruleBrokenLinks]: null,
[ImplementationGuide_ParameterCodeKind.generateXml]: null,
[ImplementationGuide_ParameterCodeKind.generateJson]: null,
[ImplementationGuide_ParameterCodeKind.generateTurtle]: null,
[ImplementationGuide_ParameterCodeKind.htmlTemplate]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: ImplementationGuide_ParameterCodeKindKeys,
_code: RTTI_Element,
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_ImplementationGuide_Parameter:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Parameter = t.TypeOf<typeof RTTI_ImplementationGuide_Parameter>;
        
        