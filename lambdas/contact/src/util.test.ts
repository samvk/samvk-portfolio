import { escapeHtml } from './util';

test('escapeHtml escapes special characters', () => {
    expect(
        escapeHtml('<note>\n"Singin\' in the Rain" has 1 Golden Globe win & 2 nominations.\r\n</note>'),
    ).toBe(
        '&lt;note&gt;<br>&quot;Singin&apos; in the Rain&quot; has 1 Golden Globe win &amp; 2 nominations.<br>&lt;/note&gt;',
    );
});
