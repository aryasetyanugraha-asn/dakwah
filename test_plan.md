1. **Remove the "Inject Dummy Data" button**:
   - In `src/pages/HomeFeed.tsx`, locate the button with text "Inject Dummy Data" and remove it or comment it out.

2. **Hardcode data in frontend to bypass Firebase**:
   - Create a `src/utils/dummyData.ts` file holding the dummy scholars and contents arrays (copied from `src/utils/seedData.ts`).
   - In `src/services/firestore.ts`, modify `getUsers` and `getContents` to return `Promise.resolve(dummyScholars)` and `Promise.resolve(dummyContents)` respectively, importing them from `src/utils/dummyData.ts`, instead of calling Firebase.

3. **Change Profile Photos to Typography/Initials**:
   - In `src/utils/initials.ts`, create a helper `getInitials(name)` that takes a name and returns the first letter of each word (up to 3 letters).
   - In the dummy data (`src/utils/dummyData.ts`), empty the `avatar` field for scholars so it falls back to empty.
   - Update `src/pages/HomeFeed.tsx`, `src/pages/ScholarProfile.tsx`, `src/pages/ContentDetail.tsx`, and `src/pages/AdminDashboard.tsx` to conditionally render typography (e.g. `getInitials(user.name)`) in place of `<img>` tags for user avatars. I will also need to update `src/components/Sidebar.tsx`.

4. **Change Logo and App Name to "PustakaMDI"**:
   - Search for "Al-Maktabah" across `src/components/Sidebar.tsx`, `src/pages/ContentDetail.tsx`, and `src/pages/ScholarProfile.tsx` and replace it with "PustakaMDI".
   - Search for the logo `<img>` tag in `src/components/Sidebar.tsx` and replace it with typography "P" or "PMDI" if it's the logo mark, or keep it as is if it's just the text that needs changing. I will replace the logo img with text.
   - Do the same in `src/pages/ContentDetail.tsx` (the mobile header).

5. **Pre-commit tasks**:
   - Run linter and typescript checker.

6. **Submit**:
   - Submit the changes using the provided tools.
