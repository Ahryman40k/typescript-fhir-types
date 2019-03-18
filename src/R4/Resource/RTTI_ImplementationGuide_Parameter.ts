
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

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


            export interface IImplementationGuide_Parameter {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * apply-business-version | apply-jurisdiction | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
                     */
                    code? : ImplementationGuide_ParameterCodeKind;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    

                    /**
                     * Value for named type.
                     */
                    value? : string;
                    

                    /**
                     * Extensions for value
                     */
                    _value? : IElement;
                    
            }
        


        export const RTTI_ImplementationGuide_Parameter: t.Type<IImplementationGuide_Parameter> = t.recursion( 'IImplementationGuide_Parameter', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: ImplementationGuide_ParameterCodeKindKeys,
_code: RTTI_Element,
value: t.string,
_value: RTTI_Element
        })
        
        );
        

        