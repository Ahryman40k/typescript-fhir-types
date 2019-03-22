
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_ValueSet_Concept, IValueSet_Concept } from './RTTI_ValueSet_Concept';
import { RTTI_ValueSet_Filter, IValueSet_Filter } from './RTTI_ValueSet_Filter';





export interface IValueSet_Include {


        /**
         * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
         */
        id?: string;


        /**
         * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
         */
        extension?: IExtension[];


        /**
         * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        modifierExtension?: IExtension[];


        /**
         * An absolute URI which is the code system from which the selected codes come from.
         */
        system?: string;


        /**
         * Extensions for system
         */
        _system?: IElement;


        /**
         * The version of the code system that the codes are selected from, or the special version "*" for all versions.
         */
        version?: string;


        /**
         * Extensions for version
         */
        _version?: IElement;


        /**
         * Specifies a concept to be included or excluded.
         */
        concept?: IValueSet_Concept[];


        /**
         * Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
         */
        filter?: IValueSet_Filter[];


        /**
         * Selects the concepts found in this value set (based on its value set definition). This is an absolute URI that is a reference to ValueSet.url.  If multiple value sets are specified this includes the union of the contents of all of the referenced value sets.
         */
        valueSet?: string[];

}



export const RTTI_ValueSet_Include: t.Type<IValueSet_Include> = t.recursion('IValueSet_Include', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                modifierExtension: t.array(RTTI_Extension),
                system: t.string,
                _system: RTTI_Element,
                version: t.string,
                _version: RTTI_Element,
                concept: t.array(RTTI_ValueSet_Concept),
                filter: t.array(RTTI_ValueSet_Filter),
                valueSet: t.array(t.string)
        })

);


