// ====================================================================
// XEP-0402: Bookmarks 2
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0402.html
// Version: 0.2.1 (2018-07-22)
// ====================================================================

import { PubsubItemContent } from './';

import {
    attribute,
    booleanAttribute,
    childText,
    DefinitionOptions,
    JIDAttribute,
    pubsubItemContentAliases
} from '../jxt';

import { NS_BOOKMARKS2_0 } from '../Namespaces';

declare module './' {
    export interface Bookmarks2Storage {
        bookmarks?: Bookmarks2Item;
    }
}

export interface Bookmarks2Item extends PubsubItemContent {
    itemType?: typeof NS_BOOKMARKS2_0;
    conference?: Conference;
}

export interface Conference {
    name?: string;
    autojoin?: boolean;
    nick?: string;
    password?: string;
}

const Protocol: DefinitionOptions[] = [
    {
        aliases: pubsubItemContentAliases(),
        element: 'conference',
        fields: {
            autojoin: booleanAttribute('autojoin'),
            name: attribute('name'),
            nick: childText(null, 'nick'),
            password: childText(null, 'password')
        },
        namespace: NS_BOOKMARKS2_0,
        type: NS_BOOKMARKS2_0,
        typeField: 'itemType'
    }
];

export default Protocol;
