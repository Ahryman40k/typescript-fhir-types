
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Coding, ICoding} from './RTTI_Coding';




            export interface IImagingStudy_Instance {
                
                    /**
                     * Formal identifier for this image or other content.
                     */
                    identifier : IIdentifier;
                    

                    /**
                     * DICOM instance  type.
                     */
                    sopClass : ICoding;
                    
                
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
                     * The number of instance in the series.
                     */
                    number? : number;
                    

                    /**
                     * Extensions for number
                     */
                    _number? : IElement;
                    

                    /**
                     * The description of the instance.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    
            }
        


        export const RTTI_ImagingStudy_Instance: t.Type<IImagingStudy_Instance> = t.recursion( 'IImagingStudy_Instance', () =>
            t.intersection([
                
        t.type({
           identifier: RTTI_Identifier,
sopClass: RTTI_Coding
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.number,
_number: RTTI_Element,
title: t.string,
_title: RTTI_Element
        })
        
            ])
        );
        

        