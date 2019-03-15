
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum ProcessResponse_ProcessNoteTypeKind {
                display = 'display',
print = 'print',
printoper = 'printoper'
            }
const ProcessResponse_ProcessNoteTypeKindKeys = t.keyof({
                [ProcessResponse_ProcessNoteTypeKind.display]: null,
[ProcessResponse_ProcessNoteTypeKind.print]: null,
[ProcessResponse_ProcessNoteTypeKind.printoper]: null
            });


            export interface IProcessResponse_ProcessNote {
                
                
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
                     * The note purpose: Print/Display.
                     */
                    type? : ProcessResponse_ProcessNoteTypeKind;
                    

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
                    
            }
        


        export const RTTI_ProcessResponse_ProcessNote: t.Type<IProcessResponse_ProcessNote> = t.recursion( 'IProcessResponse_ProcessNote', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: ProcessResponse_ProcessNoteTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element
        })
        
        );
        

        