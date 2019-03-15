
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export enum ClaimResponse_ProcessNoteTypeKind {
                display = 'display',
print = 'print',
printoper = 'printoper'
            }
const ClaimResponse_ProcessNoteTypeKindKeys = t.keyof({
                [ClaimResponse_ProcessNoteTypeKind.display]: null,
[ClaimResponse_ProcessNoteTypeKind.print]: null,
[ClaimResponse_ProcessNoteTypeKind.printoper]: null
            });


            export interface IClaimResponse_ProcessNote {
                
                
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
                     * An integer associated with each note which may be referred to from each service line item.
                     */
                    number? : number;
                    

                    /**
                     * Extensions for number
                     */
                    _number? : IElement;
                    

                    /**
                     * The note purpose: Print/Display.
                     */
                    type? : ClaimResponse_ProcessNoteTypeKind;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * The note text.
                     */
                    text? : string;
                    

                    /**
                     * Extensions for text
                     */
                    _text? : IElement;
                    

                    /**
                     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
                     */
                    language? : ICodeableConcept;
                    
            }
        


        export const RTTI_ClaimResponse_ProcessNote: t.Type<IClaimResponse_ProcessNote> = t.recursion( 'IClaimResponse_ProcessNote', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.number,
_number: RTTI_Element,
type: ClaimResponse_ProcessNoteTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element,
language: RTTI_CodeableConcept
        })
        
        );
        

        