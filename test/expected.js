// This file was auto-generated by graphql-fragment-codegen. Do not edit it by hand.

export const Foo = `fragment Foo on Foo {
  scalar
  object {
    yay
    ok
  }
  scalarList
  objectList {
    yay
    ok
  }
  deeplyNested {
    shouldNest
    shouldIndentCorrectly {
      foo
      indentingCorrectly {
        foo
        indentingCorrectly
      }
    }
  }
}
`

export const Bar = `fragment Bar on Bar {
  yay
  ok
}
`

export const DeeplyNested = `fragment DeeplyNested on DeeplyNested {
  shouldNest
  shouldIndentCorrectly {
    foo
    indentingCorrectly {
      foo
      indentingCorrectly
    }
  }
}
`

export const VeryDeeplyNested = `fragment VeryDeeplyNested on VeryDeeplyNested {
  foo
  indentingCorrectly {
    foo
    indentingCorrectly
  }
}
`

export const VeryVeryDeeplyNested = `fragment VeryVeryDeeplyNested on VeryVeryDeeplyNested {
  foo
  indentingCorrectly
}
`
