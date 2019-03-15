
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Sequence_Outer, ISequence_Outer} from './RTTI_Sequence_Outer';
import {RTTI_Sequence_Inner, ISequence_Inner} from './RTTI_Sequence_Inner';




            export interface ISequence_StructureVariant {
                
                
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
                     * Identify the exact boundaries of variant sequences. Each type of structure variant requires the DNA duplex to be broken and rejoined, and this creates a new sequence of bases at the rejoined sites, known as breakpoints or boundaries.
                     */
                    precision? : string;
                    

                    /**
                     * Extensions for precision
                     */
                    _precision? : IElement;
                    

                    /**
                     * Structural Variant reported aCGH ratio.
                     */
                    reportedaCGHRatio? : number;
                    

                    /**
                     * Extensions for reportedaCGHRatio
                     */
                    _reportedaCGHRatio? : IElement;
                    

                    /**
                     * Length of the variant choromosome.
                     */
                    length? : number;
                    

                    /**
                     * Extensions for length
                     */
                    _length? : IElement;
                    

                    /**
                     * Structural variant outer.
                     */
                    outer? : ISequence_Outer;
                    

                    /**
                     * Structural variant inner.
                     */
                    inner? : ISequence_Inner;
                    
            }
        


        export const RTTI_Sequence_StructureVariant: t.Type<ISequence_StructureVariant> = t.recursion( 'ISequence_StructureVariant', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
precision: t.string,
_precision: RTTI_Element,
reportedaCGHRatio: t.number,
_reportedaCGHRatio: RTTI_Element,
length: t.number,
_length: RTTI_Element,
outer: RTTI_Sequence_Outer,
inner: RTTI_Sequence_Inner
        })
        
        );
        

        