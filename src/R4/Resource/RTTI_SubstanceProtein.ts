
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_SubstanceProtein_Subunit, ISubstanceProtein_Subunit} from './RTTI_SubstanceProtein_Subunit';
import { createEnumType } from '../../EnumType'




            export interface ISubstanceProtein {
                
                    /**
                     * This is a SubstanceProtein resource
                     */
                    resourceType: 'SubstanceProtein';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence.
                     */
                    sequenceType? : ICodeableConcept;
                    

                    /**
                     * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable.
                     */
                    numberOfSubunits? : number;
                    

                    /**
                     * Extensions for numberOfSubunits
                     */
                    _numberOfSubunits? : IElement;
                    

                    /**
                     * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions.
                     */
                    disulfideLinkage? : string[];
                    

                    /**
                     * Extensions for disulfideLinkage
                     */
                    _disulfideLinkage? : IElement[];
                    

                    /**
                     * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
                     */
                    subunit? : ISubstanceProtein_Subunit[];
                    
            }
        


        export const RTTI_SubstanceProtein: t.Type<ISubstanceProtein> = t.recursion( 'ISubstanceProtein', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('SubstanceProtein')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequenceType: RTTI_CodeableConcept,
numberOfSubunits: t.number,
_numberOfSubunits: RTTI_Element,
disulfideLinkage: t.array(t.string),
_disulfideLinkage: t.array(RTTI_Element),
subunit: t.array(RTTI_SubstanceProtein_Subunit)
        })
        
            ])
        );
        

        