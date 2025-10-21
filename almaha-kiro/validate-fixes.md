# Visual Validation Checklist

## Current Issues to Fix:

### ❌ Header Background
- **Expected**: White background (solid)
- **Current**: May still be transparent or incorrect
- **Fix Applied**: Set `background-color: var(--color-white)` and removed transparency

### ❌ Slider Visibility  
- **Expected**: Hero slider visible at top of homepage
- **Current**: Not visible in screenshot
- **Fix Applied**: 
  - Created Slider component
  - Added debugging borders (blue border should be visible)
  - Fixed Layout padding issues
  - Added `hasSlider` prop to Layout

### ✅ Colors
- **Expected**: Dark gray (#32373c) and red (#c92228) 
- **Current**: Should be correct now
- **Fix Applied**: Updated CSS variables

## Validation Steps:

1. **Check if slider is visible**: Look for blue debugging border
2. **Check header background**: Should be solid white
3. **Check layout**: Content should not overlap with header
4. **Check colors**: Footer should be dark gray, accent should be red

## Debug Elements Added:
- Blue border around slider (`.heroSlider`)
- Border around individual slides
- Proper spacing for fixed header

## Next Steps:
1. Take screenshot to validate changes
2. Remove debugging borders once slider is confirmed working
3. Verify all sections are properly positioned