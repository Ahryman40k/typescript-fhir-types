
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Integer } from '../Scalar/Integer';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Sequence_Quality } from '../Resource/Sequence_Quality';
import { Sequence_ReferenceSeq } from '../Resource/Sequence_ReferenceSeq';
import { Sequence_Repository } from '../Resource/Sequence_Repository';
import { Sequence_StructureVariant } from '../Resource/Sequence_StructureVariant';
import { Sequence_Variant } from '../Resource/Sequence_Variant';
import { Uri } from '../Scalar/Uri';

        export enum SequenceTypeKind {
                aa,
dna,
rna
            }

        /**
         * Raw data describing a biological sequence. 
         */
        export class Sequence  {

            constructor() {
                
            }

            
                /**
                 * This is a Sequence resource
                 */
                resourceType: string = 'Sequence;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
                 */
                identifier? : Identifier[];
                

                /**
                 * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
                 */
                type? : SequenceTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
                 */
                coordinateSystem? : Integer;
                

                /**
                 * Extensions for coordinateSystem
                 */
                _coordinateSystem? : Element;
                

                /**
                 * The patient whose sequencing results are described by this resource.
                 */
                patient? : Reference;
                

                /**
                 * Specimen used for sequencing.
                 */
                specimen? : Reference;
                

                /**
                 * The method for sequencing, for example, chip information.
                 */
                device? : Reference;
                

                /**
                 * The organization or lab that should be responsible for this result.
                 */
                performer? : Reference;
                

                /**
                 * The number of copies of the seqeunce of interest. (RNASeq).
                 */
                quantity? : Quantity;
                

                /**
                 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
                 */
                referenceSeq? : Sequence_ReferenceSeq;
                

                /**
                 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
                 */
                variant? : Sequence_Variant[];
                

                /**
                 * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.
                 */
                observedSeq? : string;
                

                /**
                 * Extensions for observedSeq
                 */
                _observedSeq? : Element;
                

                /**
                 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
                 */
                quality? : Sequence_Quality[];
                

                /**
                 * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
                 */
                readCoverage? : Integer;
                

                /**
                 * Extensions for readCoverage
                 */
                _readCoverage? : Element;
                

                /**
                 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
                 */
                repository? : Sequence_Repository[];
                

                /**
                 * Pointer to next atomic sequence which at most contains one variant.
                 */
                pointer? : Reference[];
                

                /**
                 * Information about chromosome structure variation.
                 */
                structureVariant? : Sequence_StructureVariant[];
                
        }
        