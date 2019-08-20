# TranslatePipe - reloadLang() Bug

## Conclusion

Calling `reloadLang()` won't trigger an `onTranslationChange` event, which is necessary to re-render the view.
