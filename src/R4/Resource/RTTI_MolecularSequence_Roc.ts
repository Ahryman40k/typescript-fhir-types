
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';




export interface IMolecularSequence_Roc {


        /**
         * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
         */
        id?: string;


        /**
         * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
         */
        extension?: IExtension[];


        /**
         * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        modifierExtension?: IExtension[];


        /**
         * Invidual data point representing the GQ (genotype quality) score threshold.
         */
        score?: number[];


        /**
         * Extensions for score
         */
        _score?: IElement[];


        /**
         * The number of true positives if the GQ score threshold was set to "score" field value.
         */
        numTP?: number[];


        /**
         * Extensions for numTP
         */
        _numTP?: IElement[];


        /**
         * The number of false positives if the GQ score threshold was set to "score" field value.
         */
        numFP?: number[];


        /**
         * Extensions for numFP
         */
        _numFP?: IElement[];


        /**
         * The number of false negatives if the GQ score threshold was set to "score" field value.
         */
        numFN?: number[];


        /**
         * Extensions for numFN
         */
        _numFN?: IElement[];


        /**
         * Calculated precision if the GQ score threshold was set to "score" field value.
         */
        precision?: number[];


        /**
         * Extensions for precision
         */
        _precision?: IElement[];


        /**
         * Calculated sensitivity if the GQ score threshold was set to "score" field value.
         */
        sensitivity?: number[];


        /**
         * Extensions for sensitivity
         */
        _sensitivity?: IElement[];


        /**
         * Calculated fScore if the GQ score threshold was set to "score" field value.
         */
        fMeasure?: number[];


        /**
         * Extensions for fMeasure
         */
        _fMeasure?: IElement[];

}



export const RTTI_MolecularSequence_Roc: t.Type<IMolecularSequence_Roc> = t.recursion('IMolecularSequence_Roc', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                modifierExtension: t.array(RTTI_Extension),
                score: t.array(t.number),
                _score: t.array(RTTI_Element),
                numTP: t.array(t.number),
                _numTP: t.array(RTTI_Element),
                numFP: t.array(t.number),
                _numFP: t.array(RTTI_Element),
                numFN: t.array(t.number),
                _numFN: t.array(RTTI_Element),
                precision: t.array(t.number),
                _precision: t.array(RTTI_Element),
                sensitivity: t.array(t.number),
                _sensitivity: t.array(RTTI_Element),
                fMeasure: t.array(t.number),
                _fMeasure: t.array(RTTI_Element)
        })

);


