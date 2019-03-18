
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum CapabilityStatement_SearchParamTypeKind {
                number = 'number',
date = 'date',
string = 'string',
token = 'token',
reference = 'reference',
composite = 'composite',
quantity = 'quantity',
uri = 'uri',
special = 'special'
            }
const CapabilityStatement_SearchParamTypeKindKeys = t.keyof({
                [CapabilityStatement_SearchParamTypeKind.number]: null,
[CapabilityStatement_SearchParamTypeKind.date]: null,
[CapabilityStatement_SearchParamTypeKind.string]: null,
[CapabilityStatement_SearchParamTypeKind.token]: null,
[CapabilityStatement_SearchParamTypeKind.reference]: null,
[CapabilityStatement_SearchParamTypeKind.composite]: null,
[CapabilityStatement_SearchParamTypeKind.quantity]: null,
[CapabilityStatement_SearchParamTypeKind.uri]: null,
[CapabilityStatement_SearchParamTypeKind.special]: null
            });


            export interface ICapabilityStatement_SearchParam {
                
                
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
                     * The name of the search parameter used in the interface.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]). This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
                     */
                    definition? : string;
                    

                    /**
                     * The type of value a search parameter refers to, and how the content is interpreted.
                     */
                    type? : CapabilityStatement_SearchParamTypeKind;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
                     */
                    documentation? : string;
                    

                    /**
                     * Extensions for documentation
                     */
                    _documentation? : IElement;
                    
            }
        


        export const RTTI_CapabilityStatement_SearchParam: t.Type<ICapabilityStatement_SearchParam> = t.recursion( 'ICapabilityStatement_SearchParam', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
definition: t.string,
type: CapabilityStatement_SearchParamTypeKindKeys,
_type: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        })
        
        );
        

        