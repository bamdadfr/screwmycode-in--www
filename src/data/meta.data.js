/**
 * @name MetaData
 * @description data feeding the `layout-head` component
 * @type {object<string, string>[]} - meta data
 */
import { TitleData } from '@/data/title.data'

export const MetaData = [
    {
        'name': 'viewport',
        'content': 'width=device-width, initial-scale=1',
    },
    {
        'property': 'og:title',
        'content': TitleData,
    },
    {
        'property': 'og:image',
        'content': '',
    },
]