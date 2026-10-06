<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep restaurant facts, navigation, menu highlights and imagery references in a shared data module so repeated content stays consistent.
- Use shared restaurant sections across the home experience and dedicated content routes so all navigation destinations remain independently shareable.
- Keep reservations and event enquiries phone-based until a confirmed booking service is provided; do not imply an online booking was recorded.
- Use browser-safe Google Maps Embed for the public location map; do not make billable Places or routing requests from public app endpoints.
- Identify generated restaurant photography as illustrative and omit unverified aggregate-rating and opening-hours structured data.
