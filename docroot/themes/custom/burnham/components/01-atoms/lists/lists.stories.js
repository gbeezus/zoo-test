import dl from './dl.twig';
import ul from './ul.twig';
import ol from './ol.twig';
import InlineListElements from './inline-lists.twig';

import dlData from './dl.yml';
import ulData from './ul.yml';
import olData from './ol.yml';

import olWithSublist from './ol-with-sub-list.yml';
import ulWithSublist from './ul-with-sub-list.yml';
import olSublist from './ol-sub-list.yml';
import ulSublist from './ul-sub-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const definitionList = () => dl(dlData);

export const unorderedList = () => ul(ulData);

export const unorderedListWithSubList = (args) => ul(args);
unorderedListWithSubList.args = ulWithSublist;
const ulSubListItem = ul(ulSublist);
unorderedListWithSubList.args.ul_items[1].content += ulSubListItem;

export const orderedList = () => ol(olData);

export const orderedListWithSubList = (args) => ol(args);
orderedListWithSubList.args = olWithSublist;
const olSubListItem = ol(olSublist);
orderedListWithSubList.args.ol_items[1].content += olSubListItem;

export const InlineLists = () => InlineListElements({});
