Button - selected current chapter

```jsx
import React from "react";

import { Chapter } from "react-sample-components-library-dimanya35";

<Chapter
  chapterId="1"
  isSelected={true}
  text="Chapter"
  onClick={(chapterId) => {
    alert("chapterId " + chapterId);
  }}
/>;
```
