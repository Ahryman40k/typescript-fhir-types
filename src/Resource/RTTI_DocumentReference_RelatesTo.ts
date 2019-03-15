
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export enum DocumentReference_RelatesToCodeKind {
                replaces = 'replaces',
transforms = 'transforms',
signs = 'signs',
appends = 'appends'
            }
const DocumentReference_RelatesToCodeKindKeys = t.keyof({
                [DocumentReference_RelatesToCodeKind.replaces]: null,
[DocumentReference_RelatesToCodeKind.transforms]: null,
[DocumentReference_RelatesToCodeKind.signs]: null,
[DocumentReference_RelatesToCodeKind.appends]: null
            });


            export interface IDocumentReference_RelatesTo {
                
                    /**
                     * The target document of this relationship.
                     */
                    target : IReference;
                    
                
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
                     * The type of relationship that this document has with anther document.
                     */
                    code? : DocumentReference_RelatesToCodeKind;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    
            }
        


        export const RTTI_DocumentReference_RelatesTo: t.Type<IDocumentReference_RelatesTo> = t.recursion( 'IDocumentReference_RelatesTo', () =>
            t.intersection([
                
        t.type({
           target: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: DocumentReference_RelatesToCodeKindKeys,
_code: RTTI_Element
        })
        
            ])
        );
        

        