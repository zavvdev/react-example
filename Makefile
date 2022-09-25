feature:
	node ./scripts/feature/runner.js $(name)
	
shared:
	node ./scripts/componentLike/runner.js shared $(name) $(for)

container:
	node ./scripts/componentLike/runner.js containers $(name) $(for)

layout:
	node ./scripts/componentLike/runner.js layouts $(name) $(for)

page:
	node ./scripts/componentLike/runner.js pages $(name) $(for)

iic:
	node ./scripts/importIntegrityCheck/runner.js $(for)