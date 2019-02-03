
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Xhtml } from '../Scalar/Xhtml';

export enum NarrativeStatusKind {
        generated,
        extensions,
        additional,
        empty
}

/**
 * A human-readable formatted text, including images. 
 */
export class Narrative {

        constructor() {
                this.Div = undefined;
        }


        /**
         * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
         */
        Id?: String;


        /**
         * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
         */
        Extension?: Array<Extension>;


        /**
         * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
         */
        Status?: NarrativeStatusKind;


        /**
         * Extensions for status
         */
        _status?: Element;


        /**
         * The actual narrative content, a stripped down version of XHTML.
         */
        Div: Xhtml;

}
