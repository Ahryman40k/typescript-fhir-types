
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Duration, IDuration } from './RTTI_Duration';
import { RTTI_Range, IRange } from './RTTI_Range';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Element, IElement } from './RTTI_Element';


export enum Timing_RepeatWhenKind {
        morn = 'morn',
        mornEarly = 'mornEarly',
        mornLate = 'mornLate',
        noon = 'noon',
        aft = 'aft',
        aftEarly = 'aftEarly',
        aftLate = 'aftLate',
        eve = 'eve',
        eveEarly = 'eveEarly',
        eveLate = 'eveLate',
        night = 'night',
        phs = 'phs',
        hs = 'hs',
        wake = 'wake',
        c = 'c',
        cm = 'cm',
        cd = 'cd',
        cv = 'cv',
        ac = 'ac',
        acm = 'acm',
        acd = 'acd',
        acv = 'acv',
        pc = 'pc',
        pcm = 'pcm',
        pcd = 'pcd',
        pcv = 'pcv'
}
export enum Timing_RepeatDurationUnitKind {
        s = 's',
        min = 'min',
        h = 'h',
        d = 'd',
        wk = 'wk',
        mo = 'mo',
        a = 'a'
}
export enum Timing_RepeatPeriodUnitKind {
        s = 's',
        min = 'min',
        h = 'h',
        d = 'd',
        wk = 'wk',
        mo = 'mo',
        a = 'a'
}
const Timing_RepeatWhenKindKeys = t.keyof({
        [Timing_RepeatWhenKind.morn]: null,
        [Timing_RepeatWhenKind.mornEarly]: null,
        [Timing_RepeatWhenKind.mornLate]: null,
        [Timing_RepeatWhenKind.noon]: null,
        [Timing_RepeatWhenKind.aft]: null,
        [Timing_RepeatWhenKind.aftEarly]: null,
        [Timing_RepeatWhenKind.aftLate]: null,
        [Timing_RepeatWhenKind.eve]: null,
        [Timing_RepeatWhenKind.eveEarly]: null,
        [Timing_RepeatWhenKind.eveLate]: null,
        [Timing_RepeatWhenKind.night]: null,
        [Timing_RepeatWhenKind.phs]: null,
        [Timing_RepeatWhenKind.hs]: null,
        [Timing_RepeatWhenKind.wake]: null,
        [Timing_RepeatWhenKind.c]: null,
        [Timing_RepeatWhenKind.cm]: null,
        [Timing_RepeatWhenKind.cd]: null,
        [Timing_RepeatWhenKind.cv]: null,
        [Timing_RepeatWhenKind.ac]: null,
        [Timing_RepeatWhenKind.acm]: null,
        [Timing_RepeatWhenKind.acd]: null,
        [Timing_RepeatWhenKind.acv]: null,
        [Timing_RepeatWhenKind.pc]: null,
        [Timing_RepeatWhenKind.pcm]: null,
        [Timing_RepeatWhenKind.pcd]: null,
        [Timing_RepeatWhenKind.pcv]: null
});
const Timing_RepeatDurationUnitKindKeys = t.keyof({
        [Timing_RepeatDurationUnitKind.s]: null,
        [Timing_RepeatDurationUnitKind.min]: null,
        [Timing_RepeatDurationUnitKind.h]: null,
        [Timing_RepeatDurationUnitKind.d]: null,
        [Timing_RepeatDurationUnitKind.wk]: null,
        [Timing_RepeatDurationUnitKind.mo]: null,
        [Timing_RepeatDurationUnitKind.a]: null
});
const Timing_RepeatPeriodUnitKindKeys = t.keyof({
        [Timing_RepeatPeriodUnitKind.s]: null,
        [Timing_RepeatPeriodUnitKind.min]: null,
        [Timing_RepeatPeriodUnitKind.h]: null,
        [Timing_RepeatPeriodUnitKind.d]: null,
        [Timing_RepeatPeriodUnitKind.wk]: null,
        [Timing_RepeatPeriodUnitKind.mo]: null,
        [Timing_RepeatPeriodUnitKind.a]: null
});


export interface ITiming_Repeat {


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
         * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
         */
        boundsDuration?: IDuration;


        /**
         * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
         */
        boundsRange?: IRange;


        /**
         * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
         */
        boundsPeriod?: IPeriod;


        /**
         * A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.
         */
        count?: number;


        /**
         * Extensions for count
         */
        _count?: IElement;


        /**
         * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
         */
        countMax?: number;


        /**
         * Extensions for countMax
         */
        _countMax?: IElement;


        /**
         * How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.
         */
        duration?: number;


        /**
         * Extensions for duration
         */
        _duration?: IElement;


        /**
         * If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.
         */
        durationMax?: number;


        /**
         * Extensions for durationMax
         */
        _durationMax?: IElement;


        /**
         * The units of time for the duration, in UCUM units.
         */
        durationUnit?: Timing_RepeatDurationUnitKind;


        /**
         * Extensions for durationUnit
         */
        _durationUnit?: IElement;


        /**
         * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
         */
        frequency?: number;


        /**
         * Extensions for frequency
         */
        _frequency?: IElement;


        /**
         * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
         */
        frequencyMax?: number;


        /**
         * Extensions for frequencyMax
         */
        _frequencyMax?: IElement;


        /**
         * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
         */
        period?: number;


        /**
         * Extensions for period
         */
        _period?: IElement;


        /**
         * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
         */
        periodMax?: number;


        /**
         * Extensions for periodMax
         */
        _periodMax?: IElement;


        /**
         * The units of time for the period in UCUM units.
         */
        periodUnit?: Timing_RepeatPeriodUnitKind;


        /**
         * Extensions for periodUnit
         */
        _periodUnit?: IElement;


        /**
         * If one or more days of week is provided, then the action happens only on the specified day(s).
         */
        dayOfWeek?: string[];


        /**
         * Extensions for dayOfWeek
         */
        _dayOfWeek?: IElement[];


        /**
         * Specified time of day for action to take place.
         */
        timeOfDay?: string[];


        /**
         * Extensions for timeOfDay
         */
        _timeOfDay?: IElement[];


        /**
         * An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.
         */
        when?: Timing_RepeatWhenKind[];


        /**
         * Extensions for when
         */
        _when?: IElement[];


        /**
         * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
         */
        offset?: number;


        /**
         * Extensions for offset
         */
        _offset?: IElement;

}



export const RTTI_Timing_Repeat: t.Type<ITiming_Repeat> = t.recursion('ITiming_Repeat', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                modifierExtension: t.array(RTTI_Extension),
                boundsDuration: RTTI_Duration,
                boundsRange: RTTI_Range,
                boundsPeriod: RTTI_Period,
                count: t.number,
                _count: RTTI_Element,
                countMax: t.number,
                _countMax: RTTI_Element,
                duration: t.number,
                _duration: RTTI_Element,
                durationMax: t.number,
                _durationMax: RTTI_Element,
                durationUnit: Timing_RepeatDurationUnitKindKeys,
                _durationUnit: RTTI_Element,
                frequency: t.number,
                _frequency: RTTI_Element,
                frequencyMax: t.number,
                _frequencyMax: RTTI_Element,
                period: t.number,
                _period: RTTI_Element,
                periodMax: t.number,
                _periodMax: RTTI_Element,
                periodUnit: Timing_RepeatPeriodUnitKindKeys,
                _periodUnit: RTTI_Element,
                dayOfWeek: t.array(t.string),
                _dayOfWeek: t.array(RTTI_Element),
                timeOfDay: t.array(t.string),
                _timeOfDay: t.array(RTTI_Element),
                when: t.array(Timing_RepeatWhenKindKeys),
                _when: t.array(RTTI_Element),
                offset: t.number,
                _offset: RTTI_Element
        })

);


