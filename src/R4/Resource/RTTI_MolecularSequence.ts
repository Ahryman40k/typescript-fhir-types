
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import { RTTI_MolecularSequence_ReferenceSeq, IMolecularSequence_ReferenceSeq } from './RTTI_MolecularSequence_ReferenceSeq';
import { RTTI_MolecularSequence_Variant, IMolecularSequence_Variant } from './RTTI_MolecularSequence_Variant';
import { RTTI_MolecularSequence_Quality, IMolecularSequence_Quality } from './RTTI_MolecularSequence_Quality';
import { RTTI_MolecularSequence_Repository, IMolecularSequence_Repository } from './RTTI_MolecularSequence_Repository';
import { RTTI_MolecularSequence_StructureVariant, IMolecularSequence_StructureVariant } from './RTTI_MolecularSequence_StructureVariant';
import { createEnumType } from '../../EnumType'

export enum MolecularSequenceTypeKind {
    aa = 'aa',
    dna = 'dna',
    rna = 'rna'
}


export interface IMolecularSequence {

    /**
     * This is a MolecularSequence resource
     */
    resourceType: 'MolecularSequence';


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: IIdentifier[];


    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: MolecularSequenceTypeKind;


    /**
     * Extensions for type
     */
    _type?: IElement;


    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem?: number;


    /**
     * Extensions for coordinateSystem
     */
    _coordinateSystem?: IElement;


    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: IReference;


    /**
     * Specimen used for sequencing.
     */
    specimen?: IReference;


    /**
     * The method for sequencing, for example, chip information.
     */
    device?: IReference;


    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: IReference;


    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: IQuantity;


    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: IMolecularSequence_ReferenceSeq;


    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: IMolecularSequence_Variant[];


    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string;


    /**
     * Extensions for observedSeq
     */
    _observedSeq?: IElement;


    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: IMolecularSequence_Quality[];


    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number;


    /**
     * Extensions for readCoverage
     */
    _readCoverage?: IElement;


    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: IMolecularSequence_Repository[];


    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: IReference[];


    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: IMolecularSequence_StructureVariant[];

}



export const RTTI_MolecularSequence: t.Type<IMolecularSequence> = t.recursion('IMolecularSequence', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('MolecularSequence')
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
            identifier: t.array(RTTI_Identifier),
            type: createEnumType<MolecularSequenceTypeKind>(MolecularSequenceTypeKind, 'MolecularSequenceTypeKind'),
            _type: RTTI_Element,
            coordinateSystem: t.number,
            _coordinateSystem: RTTI_Element,
            patient: RTTI_Reference,
            specimen: RTTI_Reference,
            device: RTTI_Reference,
            performer: RTTI_Reference,
            quantity: RTTI_Quantity,
            referenceSeq: RTTI_MolecularSequence_ReferenceSeq,
            variant: t.array(RTTI_MolecularSequence_Variant),
            observedSeq: t.string,
            _observedSeq: RTTI_Element,
            quality: t.array(RTTI_MolecularSequence_Quality),
            readCoverage: t.number,
            _readCoverage: RTTI_Element,
            repository: t.array(RTTI_MolecularSequence_Repository),
            pointer: t.array(RTTI_Reference),
            structureVariant: t.array(RTTI_MolecularSequence_StructureVariant)
        })

    ])
);


