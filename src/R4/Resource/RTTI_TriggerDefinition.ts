
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Timing, ITiming } from './RTTI_Timing';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_DataRequirement, IDataRequirement } from './RTTI_DataRequirement';
import { RTTI_Expression, IExpression } from './RTTI_Expression';
import { createEnumType } from '../../EnumType';

export enum TriggerDefinitionTypeKind {
        namedEvent = 'named-event',
        periodic = 'periodic',
        dataChanged = 'data-changed',
        dataAdded = 'data-added',
        dataModified = 'data-modified',
        dataRemoved = 'data-removed',
        dataAccessed = 'data-accessed',
        dataAccessEnded = 'data-access-ended'
}
/*
const TriggerDefinitionTypeKindKeys = t.keyof({
                [TriggerDefinitionTypeKind.namedEvent]: null,
[TriggerDefinitionTypeKind.periodic]: null,
[TriggerDefinitionTypeKind.dataChanged]: null,
[TriggerDefinitionTypeKind.dataAdded]: null,
[TriggerDefinitionTypeKind.dataModified]: null,
[TriggerDefinitionTypeKind.dataRemoved]: null,
[TriggerDefinitionTypeKind.dataAccessed]: null,
[TriggerDefinitionTypeKind.dataAccessEnded]: null
            });*/


export interface ITriggerDefinition {


        /**
         * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
         */
        id?: string;


        /**
         * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
         */
        extension?: IExtension[];


        /**
         * The type of triggering event.
         */
        type?: TriggerDefinitionTypeKind;


        /**
         * Extensions for type
         */
        _type?: IElement;


        /**
         * A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.
         */
        name?: string;


        /**
         * Extensions for name
         */
        _name?: IElement;


        /**
         * The timing of the event (if this is a periodic trigger).
         */
        timingTiming?: ITiming;


        /**
         * The timing of the event (if this is a periodic trigger).
         */
        timingReference?: IReference;


        /**
         * The timing of the event (if this is a periodic trigger).
         */
        timingDate?: string;


        /**
         * Extensions for timingDate
         */
        _timingDate?: IElement;


        /**
         * The timing of the event (if this is a periodic trigger).
         */
        timingDateTime?: string;


        /**
         * Extensions for timingDateTime
         */
        _timingDateTime?: IElement;


        /**
         * The triggering data of the event (if this is a data trigger).
         */
        data?: IDataRequirement;


        /**
         * A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.
         */
        condition?: IExpression;

}



export const RTTI_TriggerDefinition: t.Type<ITriggerDefinition> = t.recursion('ITriggerDefinition', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                type: createEnumType<TriggerDefinitionTypeKind>(TriggerDefinitionTypeKind, 'TriggerDefinitionTypeKind'),
                _type: RTTI_Element,
                name: t.string,
                _name: RTTI_Element,
                timingTiming: RTTI_Timing,
                timingReference: RTTI_Reference,
                timingDate: t.string,
                _timingDate: RTTI_Element,
                timingDateTime: t.string,
                _timingDateTime: RTTI_Element,
                data: RTTI_DataRequirement,
                condition: RTTI_Expression
        })

);


